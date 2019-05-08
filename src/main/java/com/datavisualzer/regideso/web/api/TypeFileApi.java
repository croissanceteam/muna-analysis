package com.datavisualzer.regideso.web.api;

import com.datavisualzer.regideso.models.TypeFile;
import com.datavisualzer.regideso.models.TypeFileIndicators;
import com.datavisualzer.regideso.repositories.TypeFileIndicatorRepository;
import com.datavisualzer.regideso.repositories.TypeFileRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.LinkedList;
import java.util.List;

@RestController
public class TypeFileApi {

    private TypeFileRepository typeFileRepository;
    private TypeFileIndicatorRepository typeFileIndicatorRepository;

    public TypeFileApi(TypeFileRepository typefile,
                       TypeFileIndicatorRepository typeFileIndicator){
        this.typeFileRepository=typefile;
        this.typeFileIndicatorRepository=typeFileIndicator;
    }
    @GetMapping("api/typefiles")
    public List<TypeFile> getTypeFiles(HttpSession session, HttpServletRequest request){
        return (List<TypeFile>)typeFileRepository.findAll();
    }

    @GetMapping("api/typefilesindicators")
    public LinkedList<TypeFileIndicators> getTypeFilesIndicators(HttpSession session, HttpServletRequest request){
        return typeFileIndicatorRepository.getTypeFileIndicator();
    }

    @GetMapping("api/statustypefiles/{status}")
    public LinkedList<TypeFile> getTypeFileStatus(HttpSession session, HttpServletRequest request,@PathVariable("status") String status){
        String valueStatus=(Integer.parseInt(status)==1?"active":"desactive");
        return typeFileRepository.findBystatus(valueStatus);
    }
    @GetMapping("api/statustypefileindicators/{status}")
    public LinkedList<TypeFileIndicators> getTypeFileIndicatorStatus(HttpSession session, HttpServletRequest request,@PathVariable("status") int status){
        String valueStatus=(status==1?"active":"desactive");
        return typeFileIndicatorRepository.getTypeFileIndicatorByStatus(valueStatus);
    }
}
