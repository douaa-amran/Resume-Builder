package com.example.cvjsonapi;

import com.example.cvjsonapi.Main;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

@RestController
@RequestMapping("/api")
public class CVController {

    @PostMapping("/upload")
    public ResponseEntity<String> uploadCV(@RequestParam("file") MultipartFile file) {
        // Save the file to a temporary location
        File tempFile = new File(System.getProperty("java.io.tmpdir") + "/" + file.getOriginalFilename());
        try (FileOutputStream fos = new FileOutputStream(tempFile)) {
            fos.write(file.getBytes());
        } catch (IOException e) {
            return new ResponseEntity<>("Failed to save the file", HttpStatus.INTERNAL_SERVER_ERROR);
        }

        try {
            // Call your existing logic to extract information from the CV
            String json = Main.extractCVSInfoAsJSON(tempFile.getParent(), tempFile.getName());
            return new ResponseEntity<>(json, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Failed to extract information from the CV", HttpStatus.INTERNAL_SERVER_ERROR);
        } finally {
            // Clean up the temporary file
            tempFile.delete();
        }
    }
}