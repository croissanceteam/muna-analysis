package com.croissancehub.muna.api;

import com.croissancehub.muna.models.Factory;
import com.croissancehub.muna.models.Users;
import com.croissancehub.muna.repositories.FactoryRepository;
import com.croissancehub.muna.repositories.UserRepository;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/factory")
public class FactoryApi {

    private FactoryRepository factoryRepository;
    public FactoryApi(FactoryRepository factory){
        this.factoryRepository=factory;
    }

    @GetMapping("/list")
    public List<Factory> getFactories() {
        return (List<Factory>)factoryRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Factory> getFactory(@PathVariable("id")int id) {
        return factoryRepository.findById(id);
    }

    @GetMapping("/parent/{id}")
    public List<Factory> getFactoryByParent(@PathVariable("id")int id) {
        Factory factory=factoryRepository.findById(id).get();
        return (List<Factory>)factoryRepository.findByidparent(factory);
    }

    @GetMapping("/orgunits")
    public List<Factory> getOrgunits(HttpSession session){
        return (List<Factory>)factoryRepository.findAll();
    }

    @GetMapping("/key/{key}")
    public Factory getFactory(@PathVariable("key") String key) {
        return factoryRepository.findBykeyentity(key);
    }

    @Autowired
    private UserRepository userRepository;
    @GetMapping("/testfactory/{id}")
    public Users TestFactory(@PathVariable String id){
        return userRepository.findById(Long.parseLong(id))
                                .map(user -> {
                                    user.setUsername("Mugida");
                                    user.setFullname("Hornel");
                                    user.setPassword("lama");
                                    user.setStatus(1);
                                    userRepository.save(user);
                                    return user;
                                })
                                .orElseGet(()->{
                                    return userRepository.findById(Long.parseLong(id)).get();
                                });
    }
}
