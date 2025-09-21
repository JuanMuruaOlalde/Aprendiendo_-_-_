package com.example.pruebasmvvm;

import androidx.room.Entity;
import androidx.room.PrimaryKey;

@Entity(tableName = "personas")
public class Persona {

    @PrimaryKey
    public int id;

    public String nombre;
    public String apellido;

}
