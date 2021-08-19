import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 60%;
`;

const MainObjetos = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-left: 40%;
`;

const Titulo = styled.h1`
  display: flex;
  justify-content: center;
`;

const BoxListCar = styled.div`
  width: 184px;
  height: 120px;
  display: flex;
  font-size: 16px;
  margin: 20px;
  flex-wrap: wrap;
`;

const ListaCar = styled.div`
  width: 185px;
  border: 1px solid #000000;
`;

const CarName = styled.div`
  display: flex;
  font-size: 15px;
  justify-content: space-between;
  background-color: #dcdcdc;
`;

const InfoCarro = styled.p`
  display: flex;
`;

const Add = styled.button`
  display: flex;
`;

const BoxImageCar = styled.div`
  width: 300px;
  height: 500px;
`;

const BoxObjetos = styled.div`
  margin-top: 3%;
  margin-left: 38%;
  width: 25%;
  border: 2px solid black;
`;

const Tudo = styled.div`
disply:flex;
font-size:35px
`


class App extends Component {

    state = {
      ListaCarros:[ 
        {
          nome:"Jetta",
          montadora:"Volkswagen",
          preco:144000,
          tipo:"Sedan",
          id:1
        },{
          nome:"Polo",
          montadora:"Volkswagen",
          preco:70000,
          tipo:"Hatch",
          id:2
        },{ 
          nome:"T-Cross",
          montadora:"Volkswage",
          preco:123000,
          tipo:"SUV",
          id:3
        },{
          nome:"Tiguan R-line",
          montadora:"Volkswagen",
          preco:146000,
          tipo:"SUV",
          id:4
        },{
          nome:"Civic",
          montadora:"Honda",
          preco:115000,
          tipo:"Sedan",
          id:5
        },{
          nome:"Corolla",
          montadora:"Toyota",
          preco:110000,
          tipo:"Sedan",
          id:6
        },{
          nome:"Corola Cross",
          montadora:"Toyota",
          preco:184000,
          tipo:"SUV",
          id:7
        },{
          nome:"Compass",
          montadora:"Jeep",
          preco:132000,
          tipo:"SUV",
          id:8
        },{
          nome:"Golf G ti",
          montadora:"Volkswagen",
          preco:138000,
          tipo:"Hatch",
          id:9
        }
      ],
      addCar:[]
    };


    add = (id) => {
      this.setState({
        addCar: this.state.addCar.concat(
          this.state.ListaCarros.filter((item) => {
            return item.id === id;
          })
        )
      });
    };
  
  
    remover = (id) => {
      this.setState({
        addCar: this.state.addCar.filter((item) => {
          return item.id !== id;
        })
      });
    };
   
  
    render() { 
      return (
        <Tudo>
          <Titulo>Lojas de Carros!</Titulo>
          <div>
            <Container>
              <MainObjetos>
                {this.state.ListaCarros.map((item, index) => (
                  <BoxListCar key={index}>
                    <ListaCar>
                      <CarName key={index}>
                        {item.nome}
                        <Add onClick={() => {this.add(item.id)}}>+</Add>
                      </CarName>
                        <InfoCarro>Montadora: {item.montadora}</InfoCarro>
                        <InfoCarro>Preço: {item.preco}</InfoCarro>
                        <InfoCarro>Tipo: {item.tipo}</InfoCarro>
                    </ListaCar>
                    <CarName></CarName>
                  </BoxListCar>
                ))}
              </MainObjetos>
            </Container>
          </div>
          <BoxObjetos>
            <BoxImageCar>
              {this.state.addCar.map((item, index) => (
                  <BoxListCar key={index}>
                    <ListaCar>
                      <CarName key={index}>
                        {item.nome}
                        <Add onClick={() => {this.remover(item.id);}}>x</Add>
                      </CarName>
                        <InfoCarro>Montadora: {item.montadora}</InfoCarro>
                        <InfoCarro>Preço: {item.preco}</InfoCarro>
                        <InfoCarro>Tipo: {item.tipo}</InfoCarro>
                    </ListaCar>
                    <CarName></CarName>
                  </BoxListCar>
                ))}
            </BoxImageCar>
          </BoxObjetos>
          Total:{this.state.addCar.reduce((a,b) => a + b.preco, 0)}
        </Tudo>
      );
    }
  }
  
export default App;
  

