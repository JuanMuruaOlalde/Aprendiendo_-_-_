package com.example.pruebasmvvm;

import androidx.room.Database;
import androidx.room.RoomDatabase;

@Database(entities = {Persona.class}, version = 1)
public abstract class PersonaDb extends  RoomDatabase {
    public abstract PersonaDao personaDao();
}
