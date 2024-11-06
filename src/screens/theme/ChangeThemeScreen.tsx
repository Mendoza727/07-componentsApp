import { View, Text } from 'react-native'
import React from 'react'
import { TitleComponent } from '../../components/ui/titleComponent'
import { CustomView } from '../../components/ui/CustomView'

export const ChangeThemeScreen = () => {
  return (
    <CustomView>
      <TitleComponent title='Theme Changer'/>
    </CustomView>
  )
}
