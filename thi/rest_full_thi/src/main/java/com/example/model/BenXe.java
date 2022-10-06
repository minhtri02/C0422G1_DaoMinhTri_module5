package com.example.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "ben_xe")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BenXe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String bienSoXe;
    private String loaiXe;
    private String tenNhaXe;
    private String sdt;
    private String email;
    private String gioDi;
    private String gioDen;

    @ManyToOne
    @JoinColumn(name = "diemDi",referencedColumnName = "id")
    private DiaChi diemDi;
    @ManyToOne
    @JoinColumn(name = "diemDen",referencedColumnName = "id")
    private DiaChi diemDen;
}
