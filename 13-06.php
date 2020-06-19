<?php
class  professor{
    

private $matricula;
private $nome;
private $idade;

}


public function getnome(){
return $this->nome;



}

public function getmatricula(){
return $this->matricula;


}


public function getidade() {

return $this ->idade;

}

public function setnome($nome){
$this->nome =$nome;


}
public function setmatricula($matricula){
    $this->matricula =$matricula;      

}

public function setidade($idade ){
    $this->idade =$idade;
}

public function _construct($nome,$idade,$matricula)
$this->nome = $nome;
$this->matricula = $matricula;
$this ->idade = $idade;

class professorhorista extends professor {
private $horaaula;
private $horatrabalhada;
}

class professorfixo extends professor{

private$salario;


}

{
$professor = new professor  ("lucas","22","11815075");
var_dump ($professor );
}
?>