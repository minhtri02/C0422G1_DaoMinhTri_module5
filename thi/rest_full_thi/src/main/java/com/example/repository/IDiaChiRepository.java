package com.example.repository;

import com.example.model.DiaChi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface IDiaChiRepository extends JpaRepository<DiaChi,Integer> {
    @Transactional
    @Query(value = "select * from dia_diem",nativeQuery = true, countQuery = "select count(*) from dia_chi")
    List<DiaChi> diaChiList();

    @Transactional
    @Query(value ="select * from dia_chi where id = :id", nativeQuery = true)
    DiaChi findByID(@Param("id") Integer id);
}
