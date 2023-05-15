-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema iMWellluckYSchema
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `iMWellluckYSchema` ;

-- -----------------------------------------------------
-- Schema iMWellluckYSchema
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `iMWellluckYSchema` DEFAULT CHARACTER SET utf8 ;
USE `iMWellluckYSchema` ;

-- -----------------------------------------------------
-- Table `iMWellluckYSchema`.`Empresa`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `iMWellluckYSchema`.`Empresa` ;

CREATE TABLE IF NOT EXISTS `iMWellluckYSchema`.`Empresa` (
  `idEmpresa` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `foto` BLOB NULL,
  PRIMARY KEY (`idEmpresa`),
  UNIQUE INDEX `idEmpresa_UNIQUE` (`idEmpresa` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `iMWellluckYSchema`.`Curso`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `iMWellluckYSchema`.`Curso` ;

CREATE TABLE IF NOT EXISTS `iMWellluckYSchema`.`Curso` (
  `idCursos` INT NOT NULL AUTO_INCREMENT,
  `nomeCurso` VARCHAR(124) NOT NULL,
  `lugar` VARCHAR(64) NOT NULL,
  `dataInicio` DATE NOT NULL,
  `dataTermino` DATE NULL,
  `foto` BLOB NULL,
  `descricao` MEDIUMTEXT NULL,
  PRIMARY KEY (`idCursos`),
  UNIQUE INDEX `idCursos_UNIQUE` (`idCursos` ASC) VISIBLE,
  UNIQUE INDEX `nomeCurso_UNIQUE` (`nomeCurso` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `iMWellluckYSchema`.`Conhecimento`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `iMWellluckYSchema`.`Conhecimento` ;

CREATE TABLE IF NOT EXISTS `iMWellluckYSchema`.`Conhecimento` (
  `idConhecimento` INT NOT NULL AUTO_INCREMENT,
  `nomeConhecimento` VARCHAR(64) NOT NULL,
  `anoAdquirido` DATE NOT NULL,
  `Ferramenta` TINYINT NOT NULL DEFAULT 0,
  `foto` BLOB NULL,
  `Empresa_idEmpresa` INT NULL,
  `Curso_idCursos` INT NULL,
  PRIMARY KEY (`idConhecimento`),
  UNIQUE INDEX `idConhecimento_UNIQUE` (`idConhecimento` ASC) VISIBLE,
  INDEX `fk_Conhecimento_Empresa1_idx` (`Empresa_idEmpresa` ASC) VISIBLE,
  INDEX `fk_Conhecimento_Curso1_idx` (`Curso_idCursos` ASC) VISIBLE,
  UNIQUE INDEX `Curso_idCursos_UNIQUE` (`Curso_idCursos` ASC) VISIBLE,
  UNIQUE INDEX `Empresa_idEmpresa_UNIQUE` (`Empresa_idEmpresa` ASC) VISIBLE,
  CONSTRAINT `fk_Conhecimento_Empresa1`
    FOREIGN KEY (`Empresa_idEmpresa`)
    REFERENCES `iMWellluckYSchema`.`Empresa` (`idEmpresa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Conhecimento_Curso1`
    FOREIGN KEY (`Curso_idCursos`)
    REFERENCES `iMWellluckYSchema`.`Curso` (`idCursos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `iMWellluckYSchema`.`Projeto`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `iMWellluckYSchema`.`Projeto` ;

CREATE TABLE IF NOT EXISTS `iMWellluckYSchema`.`Projeto` (
  `idProjetos` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(64) NOT NULL,
  `descrição` VARCHAR(145) NOT NULL,
  `inicioProjeto` DATE NOT NULL,
  `terminoProjeto` DATE NULL,
  `conteudo` MEDIUMTEXT NULL,
  PRIMARY KEY (`idProjetos`),
  UNIQUE INDEX `idProjetos_UNIQUE` (`idProjetos` ASC) VISIBLE,
  UNIQUE INDEX `nome_UNIQUE` (`nome` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `iMWellluckYSchema`.`Pessoa`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `iMWellluckYSchema`.`Pessoa` ;

CREATE TABLE IF NOT EXISTS `iMWellluckYSchema`.`Pessoa` (
  `idPessoa` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(64) NOT NULL,
  `dataNascimento` DATE NULL,
  `foto` BLOB NULL,
  `isWellluckY` TINYINT NULL DEFAULT 0,
  PRIMARY KEY (`idPessoa`),
  UNIQUE INDEX `idPessoa_UNIQUE` (`idPessoa` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `iMWellluckYSchema`.`Funcao`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `iMWellluckYSchema`.`Funcao` ;

CREATE TABLE IF NOT EXISTS `iMWellluckYSchema`.`Funcao` (
  `idfuncoes` INT NOT NULL AUTO_INCREMENT,
  `nomeFuncao` VARCHAR(45) NOT NULL,
  `descricao` TEXT(100) NULL,
  `Pessoa_idPessoa` INT NOT NULL,
  PRIMARY KEY (`idfuncoes`, `Pessoa_idPessoa`),
  UNIQUE INDEX `idfuncoes_UNIQUE` (`idfuncoes` ASC) VISIBLE,
  INDEX `fk_Funcao_Pessoa1_idx` (`Pessoa_idPessoa` ASC) VISIBLE,
  CONSTRAINT `fk_Funcao_Pessoa1`
    FOREIGN KEY (`Pessoa_idPessoa`)
    REFERENCES `iMWellluckYSchema`.`Pessoa` (`idPessoa`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `iMWellluckYSchema`.`Rede Social`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `iMWellluckYSchema`.`Rede Social` ;

CREATE TABLE IF NOT EXISTS `iMWellluckYSchema`.`Rede Social` (
  `idredeSocial` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `logo` BLOB NOT NULL,
  PRIMARY KEY (`idredeSocial`),
  UNIQUE INDEX `idredeSocial_UNIQUE` (`idredeSocial` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `iMWellluckYSchema`.`UsoConhecimento`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `iMWellluckYSchema`.`UsoConhecimento` ;

CREATE TABLE IF NOT EXISTS `iMWellluckYSchema`.`UsoConhecimento` (
  `Conhecimento_idConhecimento` INT NOT NULL,
  `Projeto_idProjetos` INT NOT NULL,
  PRIMARY KEY (`Conhecimento_idConhecimento`, `Projeto_idProjetos`),
  INDEX `fk_Conhecimento_has_Projeto_Projeto1_idx` (`Projeto_idProjetos` ASC) VISIBLE,
  INDEX `fk_Conhecimento_has_Projeto_Conhecimento1_idx` (`Conhecimento_idConhecimento` ASC) VISIBLE,
  CONSTRAINT `fk_Conhecimento_has_Projeto_Conhecimento1`
    FOREIGN KEY (`Conhecimento_idConhecimento`)
    REFERENCES `iMWellluckYSchema`.`Conhecimento` (`idConhecimento`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Conhecimento_has_Projeto_Projeto1`
    FOREIGN KEY (`Projeto_idProjetos`)
    REFERENCES `iMWellluckYSchema`.`Projeto` (`idProjetos`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `iMWellluckYSchema`.`Contato`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `iMWellluckYSchema`.`Contato` ;

CREATE TABLE IF NOT EXISTS `iMWellluckYSchema`.`Contato` (
  `idContato` INT NOT NULL AUTO_INCREMENT,
  `telefone` VARCHAR(14) NOT NULL,
  `email` VARCHAR(64) NOT NULL,
  `Pessoa_idPessoa` INT NOT NULL,
  PRIMARY KEY (`idContato`),
  UNIQUE INDEX `idContato_UNIQUE` (`idContato` ASC) VISIBLE,
  UNIQUE INDEX `telefone_UNIQUE` (`telefone` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  INDEX `fk_Contato_Pessoa1_idx` (`Pessoa_idPessoa` ASC) VISIBLE,
  CONSTRAINT `fk_Contato_Pessoa1`
    FOREIGN KEY (`Pessoa_idPessoa`)
    REFERENCES `iMWellluckYSchema`.`Pessoa` (`idPessoa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `iMWellluckYSchema`.`Participacao`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `iMWellluckYSchema`.`Participacao` ;

CREATE TABLE IF NOT EXISTS `iMWellluckYSchema`.`Participacao` (
  `Projeto_idProjetos` INT NOT NULL,
  `Pessoa_idPessoa` INT NOT NULL,
  PRIMARY KEY (`Projeto_idProjetos`, `Pessoa_idPessoa`),
  INDEX `fk_Projeto_has_Companheiro_Projeto1_idx` (`Projeto_idProjetos` ASC) VISIBLE,
  INDEX `fk_Participacao_Pessoa1_idx` (`Pessoa_idPessoa` ASC) VISIBLE,
  CONSTRAINT `fk_Projeto_has_Companheiro_Projeto1`
    FOREIGN KEY (`Projeto_idProjetos`)
    REFERENCES `iMWellluckYSchema`.`Projeto` (`idProjetos`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Participacao_Pessoa1`
    FOREIGN KEY (`Pessoa_idPessoa`)
    REFERENCES `iMWellluckYSchema`.`Pessoa` (`idPessoa`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `iMWellluckYSchema`.`Atribuicao`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `iMWellluckYSchema`.`Atribuicao` ;

CREATE TABLE IF NOT EXISTS `iMWellluckYSchema`.`Atribuicao` (
  `idAtribuicao` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `descricao` TINYTEXT NULL,
  `dataInicio` DATE NOT NULL,
  `dataTermino` DATE NULL,
  `Funcao_idfuncoes` INT NOT NULL,
  `Empresa_idEmpresa` INT NOT NULL,
  PRIMARY KEY (`idAtribuicao`, `Funcao_idfuncoes`, `Empresa_idEmpresa`),
  INDEX `fk_Funcao_has_Empresa_Empresa1_idx` (`Empresa_idEmpresa` ASC) VISIBLE,
  INDEX `fk_Funcao_has_Empresa_Funcao1_idx` (`Funcao_idfuncoes` ASC) VISIBLE,
  CONSTRAINT `fk_Funcao_has_Empresa_Funcao1`
    FOREIGN KEY (`Funcao_idfuncoes`)
    REFERENCES `iMWellluckYSchema`.`Funcao` (`idfuncoes`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Funcao_has_Empresa_Empresa1`
    FOREIGN KEY (`Empresa_idEmpresa`)
    REFERENCES `iMWellluckYSchema`.`Empresa` (`idEmpresa`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `iMWellluckYSchema`.`Linkagem`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `iMWellluckYSchema`.`Linkagem` ;

CREATE TABLE IF NOT EXISTS `iMWellluckYSchema`.`Linkagem` (
  `idLinkagem` INT NOT NULL AUTO_INCREMENT,
  `Pessoa_idPessoa` INT NOT NULL,
  `Rede Social_idredeSocial` INT NOT NULL,
  `link` VARCHAR(256) NOT NULL,
  PRIMARY KEY (`idLinkagem`, `Pessoa_idPessoa`, `Rede Social_idredeSocial`),
  INDEX `fk_Pessoa_has_Rede Social_Rede Social1_idx` (`Rede Social_idredeSocial` ASC) VISIBLE,
  INDEX `fk_Pessoa_has_Rede Social_Pessoa1_idx` (`Pessoa_idPessoa` ASC) VISIBLE,
  UNIQUE INDEX `link_UNIQUE` (`link` ASC) VISIBLE,
  UNIQUE INDEX `idLinkagem_UNIQUE` (`idLinkagem` ASC) VISIBLE,
  CONSTRAINT `fk_Pessoa_has_Rede Social_Pessoa1`
    FOREIGN KEY (`Pessoa_idPessoa`)
    REFERENCES `iMWellluckYSchema`.`Pessoa` (`idPessoa`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Pessoa_has_Rede Social_Rede Social1`
    FOREIGN KEY (`Rede Social_idredeSocial`)
    REFERENCES `iMWellluckYSchema`.`Rede Social` (`idredeSocial`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
