package com.example.pruebasmvvm;

import androidx.databinding.DataBindingUtil;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProvider;

import android.annotation.SuppressLint;
import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import android.util.DisplayMetrics;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Toast;

import com.bumptech.glide.Glide;
import com.bumptech.glide.load.engine.DiskCacheStrategy;
import com.example.pruebasmvvm.databinding.FragmentPruebaBinding;

public class PruebaFragment extends Fragment {

    private FragmentPruebaBinding binding;
    private PruebaViewModel pruebaViewModel;

    public static PruebaFragment newInstance() {
        return new PruebaFragment();
    }

    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container,
                             @Nullable Bundle savedInstanceState) {
        binding = DataBindingUtil.inflate(getLayoutInflater(), R.layout.fragment_prueba, container, false);
        return binding.getRoot();
    }

    @SuppressLint("ClickableViewAccessibility")
    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);

        pruebaViewModel = new ViewModelProvider(this).get(PruebaViewModel.class);
        binding.setViewModel(pruebaViewModel);

        pruebaViewModel.textoAMostrar.observe(getViewLifecycleOwner(), new Observer<String>() {
            @Override
            public void onChanged(String texto) {
                binding.txtTexto.setText(texto);
            }
        });

        pruebaViewModel.urlImagen.observe(getViewLifecycleOwner(), new Observer<String>() {
            @Override
            public void onChanged(String url) {
                Glide.with(getContext())
                        .load(url)
                        .diskCacheStrategy(DiskCacheStrategy.ALL)
                        .into(binding.imgFoto);
            }
        });

        binding.tarjeta.setOnTouchListener(new View.OnTouchListener() {
            @Override
            public boolean onTouch(View view, MotionEvent event) {

                DisplayMetrics displayMetrics = getResources().getDisplayMetrics();
                int anchoDeLaTarjeta = binding.tarjeta.getWidth();
                int bordeInicialDeLaTarjeta = (displayMetrics.widthPixels / 2) - (anchoDeLaTarjeta / 2);

                float posicionDown = 0;
                float posicionUp;
                switch (event.getAction()) {

                    case MotionEvent.ACTION_DOWN:
                        posicionDown = view.getX();

                    case MotionEvent.ACTION_UP:
                        posicionUp = view.getX();
                        final float MOVIMIENTO_MINIMO_A_TENER_EN_CUENTA = 100;
                        if(Math.abs(posicionUp - posicionDown) > MOVIMIENTO_MINIMO_A_TENER_EN_CUENTA){
                            if(posicionUp - posicionDown > 0){
                                //TODO hacer lo que se quiera hacer al arrastrar de izda a dcha;
                                Toast.makeText(getContext(), "izda a dcha", Toast.LENGTH_SHORT).show();
                            }
                            if(posicionUp - posicionDown < 0){
                                //TODO hacer lo que se quiera hacer al arrastrar de dcha a izda;
                                Toast.makeText(getContext(), "dcha a izda", Toast.LENGTH_SHORT).show();
                            }
                        }
                        binding.tarjeta.animate()
                                .x(bordeInicialDeLaTarjeta)
                                .setDuration(10)
                                .start();
                        break;

                    case MotionEvent.ACTION_MOVE:
                        float posicion = event.getRawX();
                        binding.tarjeta.animate()
                                .x(posicion - ((float) anchoDeLaTarjeta / 2))
                                .setDuration(0)
                                .start();
                        break;
                }

                return true;
            }
        });

    }

}