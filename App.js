import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

// Imports dos componentes de tela de desafio (crie esses arquivos depois)
/*
import TrocadorDeCoresScreen from './TrocadorDeCoresScreen';
import ContadorScreen from './ContadorScreen';
import CarrosselScreen from './CarrosselScreen';
import NavbarResponsivaScreen from './NavbarResponsivaScreen';
import SidebarScreen from './SidebarScreen';
import ModalScreen from './ModalScreen';
import PaginaPerguntasFrequentesScreen from './PaginaPerguntasFrequentesScreen';
import PaginaMenuRestauranteScreen from './PaginaMenuRestauranteScreen';
import SegundoPlanoVideoScreen from './SegundoPlanoVideoScreen';
import BarraNavegacaoRolagemScreen from './BarraNavegacaoRolagemScreen';
import GuiasConteudoScreen from './GuiasConteudoScreen';
import RelogioContagemRegressivaScreen from './RelogioContagemRegressivaScreen';
import LoremIpsumScreen from './LoremIpsumScreen';
import ListaComprasScreen from './ListaComprasScreen';
import SliderImagensScreen from './SliderImagensScreen';
import JogoPedraPapelTesouraScreen from './JogoPedraPapelTesouraScreen';
import JogoGeniusScreen from './JogoGeniusScreen';
import JogoPlataformaScreen from './JogoPlataformaScreen';
import DoodleJumpScreen from './DoodleJumpScreen';
import FlappyBirdScreen from './FlappyBirdScreen';
import JogoMemoriaScreen from './JogoMemoriaScreen';
import JogoWhackAMoleScreen from './JogoWhackAMoleScreen';
import JogoLigue4Screen from './JogoLigue4Screen';
import JogoCobrinhaScreen from './JogoCobrinhaScreen';
import JogoSpaceInvadersScreen from './JogoSpaceInvadersScreen';
import JogoFroggerScreen from './JogoFroggerScreen';
import JogoTetrisScreen from './JogoTetrisScreen';
import JogoVelhaReactHooksScreen from './JogoVelhaReactHooksScreen';
import JogoTetrisReactHooksScreen from './JogoTetrisReactHooksScreen';
import AppLembreteAniversariosScreen from './AppLembreteAniversariosScreen';
import PaginaViagensScreen from './PaginaViagensScreen';
import AccordionScreen from './AccordionScreen';
import GuiasPortfolioScreen from './GuiasPortfolioScreen';
import SliderRevisoesScreen from './SliderRevisoesScreen';
import GeradorCoresScreen from './GeradorCoresScreen';
import PaginaMenuPagamentosStripeScreen from './PaginaMenuPagamentosStripeScreen';
import PaginaCarrinhoComprasScreen from './PaginaCarrinhoComprasScreen';
import PaginaBuscaCoqueteisScreen from './PaginaBuscaCoqueteisScreen';
import AppPerguntasRespostasTypeScriptScreen from './AppPerguntasRespostasTypeScriptScreen';
import JogoArkanoidTypeScriptScreen from './JogoArkanoidTypeScriptScreen';
*/

const Cabecalho = ({ corTexto, corFundo }) => {
  return (
    <View style={[styles.cabecalhoContainer, { backgroundColor: corFundo }]}>
      <Text style={[styles.cabecalhoTexto, { color: corTexto }]}>
        40 Desafios JS
      </Text>
    </View>
  );
};

const listaDesafiosNomes = [
  "1° Trocador de Cores",
  "2° Contador",
  "3° Carrossel de Revisões",
  "4° Navbar Responsiva",
  "5° Sidebar",
  "6° Modal",
  "7° Página de Perguntas Frequentes",
  "8° Página de Menu de Restaurante",
  "9° Segundo Plano de Vídeo",
  "10° Barra de Navegação com Rolagem",
  "11° Guias de Conteúdo",
  "12° Relógio de Contagem Regressiva",
  "13° Lorem Ipsum",
  "14° Lista de Compras",
  "15° Slider de Imagens",
  "16° Jogo de Pedra, Papel e Tesoura",
  "17° Jogo do Genius",
  "18° Jogo de Plataforma",
  "19° Doodle Jump",
  "20° Flappy Bird",
  "21° Jogo de Memória",
  "22° Jogo de Whack-a-mole",
  "23° Jogo de Ligue 4",
  "24° Jogo da Cobrinha",
  "25° Jogo do Space Invaders",
  "26° Jogo do Frogger",
  "27° Jogo de Tetris",
  "28° Jogo da Velha (React Hooks)",
  "29° Jogo de Tetris (React Hooks)",
  "30° App de Lembrete de Aniversários",
  "31° Página de Viagens",
  "32° Accordion",
  "33° Guias de Portfólio",
  "34° Slider de Revisões",
  "35° Gerador de Cores",
  "36° Página de Menu de Pagamentos (Stripe)",
  "37° Página de Carrinho de Compras",
  "38° Página de Busca de Coquetéis",
  "39° App de Perguntas e Respostas (React/TypeScript)",
  "40° Jogo de Arkanoid (TypeScript)",
];

const App = () => {
  const [telaAtual, setTelaAtual] = useState(null);
  const Rodape = ({ username }) => { // Componente Rodape definido corretamente
    return (
      <View style={styles.rodapeContainer}>
        <Text style={styles.rodapeTexto}>Meu GitHub: {username}</Text>
      </View>
    );
  };

  const renderTelaAtual = () => {
    switch (telaAtual) {
      // Cases para renderizar os componentes de desafio (descomente quando criar os arquivos)
      /*
      case 0:
        return <TrocadorDeCoresScreen />;
      case 1:
        return <ContadorScreen />;
      case 2:
        return <CarrosselScreen />;
      case 3:
        return <NavbarResponsivaScreen />;
      case 4:
        return <SidebarScreen />;
      case 5:
        return <ModalScreen />;
      case 6:
        return <PaginaPerguntasFrequentesScreen />;
      case 7:
        return <PaginaMenuRestauranteScreen />;
      case 8:
        return <SegundoPlanoVideoScreen />;
      case 9:
        return <BarraNavegacaoRolagemScreen />;
      case 10:
        return <GuiasConteudoScreen />;
      case 11:
        return <RelogioContagemRegressivaScreen />;
      case 12:
        return <LoremIpsumScreen />;
      case 13:
        return <ListaComprasScreen />;
      case 14:
        return <SliderImagensScreen />;
      case 15:
        return <JogoPedraPapelTesouraScreen />;
      case 16:
        return <JogoGeniusScreen />;
      case 17:
        return <JogoPlataformaScreen />;
      case 18:
        return <DoodleJumpScreen />;
      case 19:
        return <FlappyBirdScreen />;
      case 20:
        return <JogoMemoriaScreen />;
      case 21:
        return <JogoWhackAMoleScreen />;
      case 22:
        return <JogoLigue4Screen />;
      case 23:
        return <JogoCobrinhaScreen />;
      case 24:
        return <JogoSpaceInvadersScreen />;
      case 25:
        return <JogoFroggerScreen />;
      case 26:
        return <JogoTetrisScreen />;
      case 27:
        return <JogoVelhaReactHooksScreen />;
      case 28:
        return <JogoTetrisReactHooksScreen />;
      case 29:
        return <AppLembreteAniversariosScreen />;
      case 30:
        return <PaginaViagensScreen />;
      case 31:
        return <AccordionScreen />;
      case 32:
        return <GuiasPortfolioScreen />;
      case 33:
        return <SliderRevisoesScreen />;
      case 34:
        return <GeradorCoresScreen />;
      case 35:
        return <PaginaMenuPagamentosStripeScreen />;
      case 36:
        return <PaginaCarrinhoComprasScreen />;
      case 37:
        return <PaginaBuscaCoqueteisScreen />;
      case 38:
        return <AppPerguntasRespostasTypeScriptScreen />;
      case 39:
        return <JogoArkanoidTypeScriptScreen />;
      */
      default:
        return (
          <ScrollView style={styles.listaContainer}>
            {listaDesafiosNomes.map((nomeDesafio, index) => (
              <TouchableOpacity
                key={index}
                style={styles.botaoDesafio}
                onPress={() => {
                  // Lógica para navegar para o desafio (ficará comentada por enquanto)
                  // setTelaAtual(index);
                  console.log(`Botão "${nomeDesafio}" pressionado (índice ${index})`);
                  // Você descomentará a linha acima e comentará o console.log quando criar as telas
                  // setTelaAtual(index);
                }}
              >
                <Text style={styles.textoBotaoDesafio}>{nomeDesafio}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        );
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Cabecalho corTexto="black" corFundo="yellow" />
      {renderTelaAtual()}
      <Rodape username="esdrasamarall" />    </View>
  );
};

const styles = StyleSheet.create({
  cabecalhoContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
  cabecalhoTexto: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  listaContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 15,
    backgroundColor: 'purple',
  },
  botaoDesafio: {
    backgroundColor: 'yellow',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  textoBotaoDesafio: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  rodapeContainer: {
    backgroundColor: 'yellow',
    padding: 15,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'purple',
  },
  rodapeTexto: {
    fontSize: 14,
    color: '#555',
  },
});

export default App;