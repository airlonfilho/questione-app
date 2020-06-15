import React, { useState } from 'react';
import {
  BaseView,
  MoreButton,
  QuestionListButton,
  ActionSheet,
  ActionSheetItem,
  colors,
} from '../../components';
import { View } from './styles';
import { QuestionFlatList } from './QuestionFlatList';
import { routesNames } from '../../routes/routesNames';
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();

export default function Question({
  navigation,
  questions,
  currentQuestionIndex,
  numberOfQuestions,
}) {
  const [isActionSheetOpen, setIsActionSheetOpen] = useState(false);
  // eslint-disable-next-line prettier/prettier
  const navigationTitle = `Questão ${currentQuestionIndex + 1} de ${numberOfQuestions}`;

  const onPressAboutQuestionButton = (question) => {
    navigation.push(routesNames.questionDetails);
  };

  const onPressQuestionListButton = () => {
    navigation.push(routesNames.questionList);
  };

  const onPressMoreButton = () => {
    setIsActionSheetOpen(true);
  };

  const onPressActionSheetCancelButton = () => {
    setIsActionSheetOpen(false);
  };

  return (
    <View>
      <BaseView
        title={
          <QuestionListButton
            title={navigationTitle}
            onPress={onPressQuestionListButton}
          />
        }
        navigationShowBackButton={false}
        navigationRightItem={<MoreButton onPress={onPressMoreButton} />}>
        <QuestionFlatList questions={questions} />
      </BaseView>

      <ActionSheet
        isOpen={isActionSheetOpen}
        onPressCancel={onPressActionSheetCancelButton}>
        <ActionSheetItem
          title="Sair da prova"
          type="destructive"
          onPress={() => {}}
          icon={<Icon name="exit-to-app" size={20} color={colors.red} />}
        />
        <ActionSheetItem
          title="Reportar erro"
          onPress={() => {}}
          icon={<Icon name="warning" size={20} color={colors.textColor} />}
        />
      </ActionSheet>
    </View>
  );
}
