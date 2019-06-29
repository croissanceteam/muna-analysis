package com.croissancehub.muna.models;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "t_datastorage_indicators")
public class datastorage implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    public int getId() {
        return id;
    }

    public Indicators getIdindicator() {
        return idindicator;
    }

    public Factory getIdorgunit() {
        return idorgunit;
    }

    public double getDatastoragevalue() {
        return storagevalue;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setIdindicator(Indicators idindicator) {
        this.idindicator = idindicator;
    }

    public void setIdorgunit(Factory idorgunit) {
        this.idorgunit = idorgunit;
    }

    public void setDatastoragevalue(double datastoragevalue) {
        this.storagevalue = datastoragevalue;
    }

    @ManyToOne
    @JoinColumn(name = "idindicator")
    private Indicators idindicator;

    @ManyToOne
    @JoinColumn(name = "idorgunit")
    private  Factory idorgunit;

    @Column(name = "storagevalue")
    private double storagevalue;

    @Column(name = "fromdate")
    private Date fromData;

    public Date getFromData() {
        return fromData;
    }

    public Date getToDate() {
        return toDate;
    }

    public void setFromData(Date fromData) {
        this.fromData = fromData;
    }

    public void setToDate(Date toDate) {
        this.toDate = toDate;
    }

    @Column(name = "todate")
    private Date toDate;
}
