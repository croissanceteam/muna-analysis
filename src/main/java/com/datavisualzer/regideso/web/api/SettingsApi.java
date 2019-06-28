package com.datavisualzer.regideso.web.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.datavisualzer.regideso.models.Settings;
import com.datavisualzer.regideso.repositories.SettingsRepository;

@RestController
@RequestMapping("/api/settings")
public class SettingsApi {

	@Autowired
	private SettingsRepository settingsRepository;
	
	@GetMapping("/list")
	public List<Settings> settings(){
		return (List<Settings>)settingsRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public Settings getSettingById (@PathVariable Long id) {
		return settingsRepository.findById(id).get();
	}
}
