package com.example.service;

import com.example.model.BenXe;
import com.example.model.DiaChi;
import com.example.repository.IBenXeRepository;
import com.example.repository.IDiaChiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BenXeService implements IBenXeService{

    @Autowired
    private IBenXeRepository iBenXeRepository;

    @Autowired
    private IDiaChiRepository iDiaChiRepository;

    @Override
    public List<BenXe> findAll() {
        return iBenXeRepository.findAll();
    }

    @Override
    public void deleteById(Integer id) {
        iBenXeRepository.delete(findByIdBenXe(id));
    }

    @Override
    public void updateByBenXe(Optional<BenXe> benXe) {
        this.iBenXeRepository.save(benXe.orElse(null));
    }

    @Override
    public List<DiaChi> findAllDiaChi() {
        return this.iDiaChiRepository.findAll();
    }

    @Override
    public BenXe findByIdBenXe(Integer id) {
//        return this.iBenXeRepository.findById(id).orElse(null);
        return this.iBenXeRepository.findByID(id);
    }

    @Override
    public void createByBenXe(Optional<BenXe> benXe) {
        this.iBenXeRepository.save(benXe.orElse(null));
    }

}
