package com.example.pruebasmvvm;

import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.ViewModel;

public class PruebaViewModel extends ViewModel {

    public MutableLiveData<String> textoAMostrar = new MutableLiveData<String>();
    public MutableLiveData<String> urlImagen = new MutableLiveData<String>();

    public PruebaViewModel() {
        super();
        textoAMostrar.setValue("Este es el primer texto.");
        urlImagen.setValue("https://bs.plantnet.org/image/o/ec747c60998106a34327a0737d664ba231bcc054");

//        PersonaDb personaDb = Room.databaseBuilder(getApplicationContext(), PersonaDb.class, "personas").build();
//        PersonaDao personaDao = personaDb.personaDao();
//        List<Persona> personas = personaDao.getTodasLasPersonas();
//
//        for (Persona persona : personas) {
//            textoAMostrar.setValue("hola");
//            Thread.sleep(3000);
//        }
    }

    public void ponerUnNuevoTexto() {
        textoAMostrar.setValue("ahora se ha puesto un nuevo texto");
    }

}