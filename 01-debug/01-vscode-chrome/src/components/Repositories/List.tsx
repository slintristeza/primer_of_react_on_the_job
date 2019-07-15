import React, { FC } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { format, parse } from 'date-fns';

import Spinner from '../common/Spinner';
import { Repository } from '../../services/github/models';

import './List.css';

export interface RepositoryListProps {
  repositories?: Repository[];
  isLoading?: boolean;
}

const RepositoryList: FC<RepositoryListProps> = ({
  repositories = [],
  isLoading = false,
}) => <></>;

export default RepositoryList;
