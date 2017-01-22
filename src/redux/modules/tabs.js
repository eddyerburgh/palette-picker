// @flow

// Constants

const SWITCH_ACTIVE_TAB = 'SWITCH_ACTIVE_TAB';

// Flow types

export type TabsState = {
  tabs: Array<string>,
  activeTab: string,
};

export type SwitchActiveTabType = {
  activeTab: string,
};

// Reducer

const initialState = {
  tabs: ['add-swatch'],
  activeTab: 'add-swatch'
};

export default function reducer(
  state: TabsState = initialState,
  action: Object = {}): TabsState {
  switch (action.type) {
    case SWITCH_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.activeTab
      };
    default:
      return state;
  }
}

// Action Creators

export function switchActiveTab(activeTab: string): SwitchActiveTabType {
  return {
    type: SWITCH_ACTIVE_TAB,
    activeTab
  };
}
