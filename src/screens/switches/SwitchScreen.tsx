import React, { useState } from "react";
import { CustomView } from "../../components/ui/CustomView";
import { CardComponent } from "../../components/ui/CardComponent";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SwitchComponent } from "../../components/ui/SwitchComponent";
import { SeparatorComponent } from "../../components/ui/SeparatorComponent";
import { TitleComponent } from "../../components/ui/titleComponent";

export const SwitchScreen = () => {
  const { top } = useSafeAreaInsets();

  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isMappy: true,
  });

  return (
    <CustomView
      style={{
        padding: 20,
      }}
    >

      <TitleComponent 
        title="Switches Component"
      
      />
      <CardComponent>
        <SwitchComponent
          toggleSwitch={(value) => setState({ ...state, isActive: value })}
          isEnabled={state.isActive}
          title="Activo"
        />

        <SeparatorComponent />

        <SwitchComponent
          toggleSwitch={(value) => setState({ ...state, isHungry: value })}
          isEnabled={state.isHungry}
          title="¿Tiene hambre?"
        />

        <SeparatorComponent />

        <SwitchComponent
          toggleSwitch={(value) => setState({ ...state, isMappy: value })}
          isEnabled={state.isMappy}
          title="¿Es feliz?"
        />
      </CardComponent>
    </CustomView>
  );
};
