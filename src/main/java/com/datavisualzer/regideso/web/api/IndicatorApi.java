package com.datavisualzer.regideso.web.api;

import com.datavisualzer.regideso.models.Indicators;
import com.datavisualzer.regideso.models.TypeFileIndicators;
import com.datavisualzer.regideso.repositories.IndicatorRepository;
import com.datavisualzer.regideso.repositories.TypeFileIndicatorRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.LinkedList;

@RestController
public class IndicatorApi {

    private IndicatorRepository indicatorRepository;
    private TypeFileIndicatorRepository typeFileIndicatorRepository;

    public IndicatorApi(IndicatorRepository indicator,
                        TypeFileIndicatorRepository typeFileIndicator){
        this.indicatorRepository=indicator;
        this.typeFileIndicatorRepository=typeFileIndicator;
    }

    @GetMapping("api/indicators")
    public LinkedList<Indicators> getIndicatorsList(HttpSession session, HttpServletRequest request) {
        return indicatorRepository.getIndicators();
    }

    @GetMapping("api/typefilesid/{id}")
    public LinkedList<TypeFileIndicators> getIndicatorsByTypeFileId(@PathVariable int id){
        return typeFileIndicatorRepository.getTypeFileIndicatorByIdTypefile(id);
    }
}
