package com.example.service;

import com.example.model.BenXe;
import com.example.model.DiaChi;

import java.util.List;
import java.util.Optional;

public interface IBenXeService {
    List<BenXe> findAll();

    void deleteById(Integer id);

    void updateByBenXe(Optional<BenXe> benXe);

    List<DiaChi> findAllDiaChi();

    BenXe findByIdBenXe(Integer id);

    void createByBenXe(Optional<BenXe> benXe);
}
