package com.sample_db.Backend.controller;

import com.sample_db.Backend.entity.Post;
import com.sample_db.Backend.service.PostService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/post")
public class PostController {
    @Autowired
    private PostService ps;
    @PostMapping
    public ResponseEntity<Post> CreatePost(@RequestBody @Valid Post post)
    {
        return new ResponseEntity<>(ps.CreatePost(post), HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity<List<Post>> ListPost()
    {
        return new ResponseEntity<>(ps.ListPost(),HttpStatus.OK);
    }
    @PutMapping("/{pid}")
    public ResponseEntity<Post> editPost(@PathVariable int pid,@RequestBody @Valid Post post)
    {
        return new ResponseEntity<>(ps.editPost(pid,post),HttpStatus.OK);
    }
    @DeleteMapping("/{pid}")
    public ResponseEntity<String> deletePost(@PathVariable int pid)
    {
        return new ResponseEntity<>(ps.deletePost(pid),HttpStatus.OK);
    }
}
