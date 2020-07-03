package com.example.lab;

import javax.persistence.*;

@Entity
@Table(name="Inquiry")
@NamedStoredProcedureQuery( name="Inquiry.getPrivateInquiries",
                            procedureName = "SelectPrivateInquiries")
@NamedStoredProcedureQuery( name = "Inquiry.getPrivateInquiryById",
                            procedureName = "SelectPrivateInquiryById",
                            parameters = {@StoredProcedureParameter(
                                    mode = ParameterMode.IN,
                                    name = "@Id",
                                    type = Integer.class)})

public class Inquiry {

    private int inquiryId;
    private String type;
    private String content;
    private int creationusersid;
    private int teacherid;

    public Inquiry() {
    }

    public Inquiry(int inquiryId, String type, String content, int creationusersid, int teacherid) {
        this.inquiryId = inquiryId;
        this.type = type;
        this.content = content;
        this.creationusersid = creationusersid;
        this.teacherid = teacherid;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getInquiryId() {
        return inquiryId;
    }

    public void setInquiryId(int inquiryId) {
        this.inquiryId = inquiryId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getCreationusersid() {
        return creationusersid;
    }

    public void setCreationusersid(int creationusersid) {
        this.creationusersid = creationusersid;
    }

    public int getTeacherid() {
        return teacherid;
    }

    public void setTeacherid(int teacherid) {
        this.teacherid = teacherid;
    }
}
