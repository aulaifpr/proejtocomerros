package br.com.giovanini.WebService.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.giovanini.WebService.entidades.Estado;

public interface DAOEstado extends JpaRepository<Estado, Integer> {

}
