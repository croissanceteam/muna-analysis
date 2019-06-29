package com.croissancehub.muna.api;

import com.croissancehub.muna.models.Indicators;
import com.croissancehub.muna.models.TypeFileIndicators;
import com.croissancehub.muna.repositories.IndicatorRepository;
import com.croissancehub.muna.repositories.TypeFileIndicatorRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.LinkedList;

@RestController
@RequestMapping("/api/indicator")
public class IndicatorApi {

    private IndicatorRepository indicatorRepository;
    private TypeFileIndicatorRepository typeFileIndicatorRepository;

    public IndicatorApi(IndicatorRepository indicator,
                        TypeFileIndicatorRepository typeFileIndicator){
        this.indicatorRepository=indicator;
        this.typeFileIndicatorRepository=typeFileIndicator;
    }

    @GetMapping("/list")
    public LinkedList<Indicators> getIndicatorsList(HttpSession session, HttpServletRequest request) {
        return indicatorRepository.getIndicators();
    }

    @GetMapping("/typefilesid/{id}")
    public LinkedList<TypeFileIndicators> getIndicatorsByTypeFileId(@PathVariable int id){
        return typeFileIndicatorRepository.getTypeFileIndicatorByIdTypefile(id);
    }
}
