package com.example.pruebasmvvm;

import androidx.room.Dao;
import androidx.room.Query;

import java.util.List;

@Dao
public interface PersonaDao {

    @Query("SELECT * from personas")
    List<Persona> getTodasLasPersonas();
}
