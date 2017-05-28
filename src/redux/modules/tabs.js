// @flow

const SWITCH_ACTIVE_TAB = 'SWITCH_ACTIVE_TAB';

type TabsState = {
  tabs: Array<string>,
  activeTab: string,
};

const initialState = {
  tabs: ['add', 'options', 'about'],
  activeTab: 'add'
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

type SwitchActiveTabType = {
    activeTab: string,
};

export function switchActiveTab(activeTab: string): SwitchActiveTabType {
  return {
    type: SWITCH_ACTIVE_TAB,
    activeTab
  };
}
