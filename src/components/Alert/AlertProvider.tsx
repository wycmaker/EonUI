import React, { Component } from 'react';

import { AlertInstance, AlertContainer } from './AlertContainer';
import { alertManager } from './alertServiceHelpers';

// Alert Provider 組件
interface AlertProviderProps {
  children: React.ReactNode;
}

class AlertProvider extends Component<AlertProviderProps> {
  private unsubscribe: (() => void) | null = null;

  state = {
    alerts: [] as AlertInstance[],
  };

  componentDidMount() {
    this.unsubscribe = alertManager.subscribe((alerts) => {
      this.setState({ alerts });
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  handleRemove = (id: string) => {
    alertManager.remove(id);
  };

  render() {
    const { children } = this.props;
    const { alerts } = this.state;

    return (
      <>
        {children}
        <AlertContainer
          alerts={alerts}
          onRemove={this.handleRemove}
        />
      </>
    );
  }
}

export { AlertProvider };
