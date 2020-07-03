package com.example.lab;

import javax.persistence.*;

@Entity
@Table(name="Inquiryresponse")
@NamedStoredProcedureQuery( name="InquiryResponse.getInquiryResponse",
                            procedureName = "SelectInquiryResponse")
@NamedStoredProcedureQuery( name = "InquiryResponse.getInquiryResponseById",
                            procedureName = "SelectInquiryResponseById",
                            parameters = {@StoredProcedureParameter(
                                mode = ParameterMode.IN,
                                name = "@Id",
                                type = Integer.class)})


public class InquiryResponse {

    private int inquiryresponseId;
    private String content;
    private int inquiryid;

    public InquiryResponse() {
    }

    public InquiryResponse(int inquiryresponseId, String content, int inquiryid) {
        this.inquiryresponseId = inquiryresponseId;
        this.content = content;
        this.inquiryid = inquiryid;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getInquiryresponseId() {
        return inquiryresponseId;
    }

    public void setInquiryresponseId(int inquiryresponseId) {
        this.inquiryresponseId = inquiryresponseId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getInquiryid() {
        return inquiryid;
    }

    public void setInquiryid(int inquiryid) {
        this.inquiryid = inquiryid;
    }
}
