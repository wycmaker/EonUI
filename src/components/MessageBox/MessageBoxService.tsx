import React, { Component } from 'react';

import { MessageBox } from './MessageBox';
import { MessageBoxInstance, messageBoxManager } from './messageBoxManager';

interface MessageBoxContainerProps {
  messageBoxes: MessageBoxInstance[];
  onClose: (id: string) => void;
}

class MessageBoxContainer extends Component<MessageBoxContainerProps> {
  render() {
    const { messageBoxes, onClose } = this.props;

    return (
      <>
        {messageBoxes.map((messageBox) => {
          const { key, id, ...messageBoxProps } = messageBox;
          return (
            <MessageBox
              key={key}
              id={id}
              {...messageBoxProps}
              visible={true}
              onClose={() => onClose(id)}
            />
          );
        })}
      </>
    );
  }
}

// MessageBox Provider 組件
interface MessageBoxProviderProps {
  children: React.ReactNode;
}

class MessageBoxProvider extends Component<MessageBoxProviderProps> {
  private unsubscribe: (() => void) | null = null;

  state = {
    messageBoxes: [] as MessageBoxInstance[],
  };

  componentDidMount() {
    this.unsubscribe = messageBoxManager.subscribe((messageBoxes) => {
      this.setState({ messageBoxes });
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  handleClose = (id: string) => {
    messageBoxManager.close(id);
  };

  render() {
    const { children } = this.props;
    const { messageBoxes } = this.state;

    return (
      <>
        {children}
        <MessageBoxContainer
          messageBoxes={messageBoxes}
          onClose={this.handleClose}
        />
      </>
    );
  }
}

export { MessageBoxProvider };
