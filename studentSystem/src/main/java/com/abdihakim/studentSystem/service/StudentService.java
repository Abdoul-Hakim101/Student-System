package com.abdihakim.studentSystem.service;

import com.abdihakim.studentSystem.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
