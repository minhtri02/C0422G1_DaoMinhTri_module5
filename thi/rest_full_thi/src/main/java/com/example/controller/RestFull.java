package com.example.controller;

import com.example.model.BenXe;
import com.example.model.DiaChi;
import com.example.service.IBenXeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("benXe")
public class RestFull {

    @Autowired
    private IBenXeService iBenXeService;

    @GetMapping("/list")
    public ResponseEntity<List<BenXe>> showListBenXe() {
        List<BenXe> benXeList = iBenXeService.findAll();

        if (benXeList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(benXeList, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Integer id){
        this.iBenXeService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/edit")
    public ResponseEntity<Void> editByBenXe(@RequestBody Optional<BenXe> benXe){

        if (!benXe.isPresent()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        this.iBenXeService.updateByBenXe(benXe);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/diaChi")
    public ResponseEntity<List<DiaChi>> findAllDiaChi(){
        List<DiaChi> diaChiList = this.iBenXeService.findAllDiaChi();

        if (diaChiList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(diaChiList,HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<BenXe> findByIdBenXe(@PathVariable Integer id){
        BenXe benXe =this.iBenXeService.findByIdBenXe(id);

        if (benXe==null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(benXe,HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Void> createByBenXe(@RequestBody Optional<BenXe> benXe){
        if (!benXe.isPresent()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        this.iBenXeService.createByBenXe(benXe);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
