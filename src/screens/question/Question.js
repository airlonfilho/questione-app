import React from 'react';
import {
  Content,
  Paragraph,
  Heading4,
  SafeAreaView,
  QuestionNavigationBar,
} from '../../components';
import { QuestionView } from './styles';

export default function Question() {
  return (
    <SafeAreaView>
      <QuestionNavigationBar title="Questão 1 de 10" />
      <Content>
        <QuestionView>
          <Heading4>Texto base</Heading4>
          <Paragraph>
            O planejamento dos testes deve ocorrer em diferentes níveis e em
            paralelo com o desenvolvimento do software. Com relação a esse
            assunto, analise a imagem (a seguir) que mostra um modelo V
            descrevendo o paralelismo entre as atividades de desenvolvimento e
            teste de software.
          </Paragraph>
        </QuestionView>
      </Content>
    </SafeAreaView>
  );
}
