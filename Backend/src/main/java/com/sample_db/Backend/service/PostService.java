package com.sample_db.Backend.service;

import com.sample_db.Backend.entity.Post;
import com.sample_db.Backend.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {
    @Autowired
    private PostRepository pr;
    public Post CreatePost(Post post)
    {
        return pr.save(post);
    }
    public List<Post> ListPost()
    {
        return pr.findAll();
    }
    public Post findById(int id)
    {
        return pr.findById(id).orElseThrow(()-> new RuntimeException("Not Found"));
    }
    public Post editPost(int id,Post post)
    {
        Post post_value = findById(id);
        post_value.setContent(post.getContent());
        return pr.save(post_value);
    }
    public String deletePost(int id)
    {
        try
        {
            findById(id);
            pr.deleteById(id);
            return "Post deleted";
        }
        catch (Exception e)
        {
            return "Error while deleting";
        }
    }
}
