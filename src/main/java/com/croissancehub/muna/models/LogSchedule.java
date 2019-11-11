package com.croissancehub.muna.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * LogSchedule
 */
@Entity
@Table(name="t_log_schedule")
public class LogSchedule implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="daterunbegin")
    private String daterunbegin;

    @Column(name="daterunend")
    private String daterunend;

    @Column(name="tasks")
    private Integer tasks;


    
}