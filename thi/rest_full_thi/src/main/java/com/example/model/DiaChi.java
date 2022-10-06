package com.example.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "dia_chi")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DiaChi {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    @OneToMany(mappedBy = "diemDi", cascade = CascadeType.ALL)
    @JsonBackReference(value = "diemDi")
    private List<BenXe> diemDi;
    @OneToMany(mappedBy = "diemDen", cascade = CascadeType.ALL)
    @JsonBackReference(value = "diemden")
    private List<BenXe> diemden;
}
