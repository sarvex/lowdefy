/*
  Copyright 2020-2021 Lowdefy, Inc

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

import React from 'react';
import { blockDefaultProps } from '@lowdefy/block-tools';
import { Avatar } from 'antd';
import Icon from '../Icon/Icon';

const AvatarBlock = ({ blockId, events, methods, properties }) => (
  <Avatar
    id={blockId}
    alt={properties.alt}
    gap={properties.gap}
    shape={properties.shape}
    size={properties.size}
    src={properties.src}
    onClick={() => methods.triggerEvent({ name: 'onClick' })}
    className={methods.makeCssClass([
      {
        backgroundColor: !properties.src && properties.color,
        cursor: events.onClick && 'pointer',
      },
      properties.style,
    ])}
    icon={
      properties.icon && (
        <Icon blockId={`${blockId}_icon`} properties={properties.icon} methods={methods} />
      )
    }
  >
    {properties.content}
  </Avatar>
);

AvatarBlock.defaultProps = blockDefaultProps;

export default AvatarBlock;
