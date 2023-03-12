import PropTypes from 'prop-types';
import {dateFormatter} from 'utils/dataFormatter'

import { Card, CardHeader, CardPoster, CardBody, Tag, CardTitle, CardText, CardFooter, UserBox, Avatar, UserInfo, UserName, Date } from './BlogCard.styled'


export const BlogCard = ({ id, poster, tag, title, description, userName, avatar, postedAt,}) => {
  return (
        <Card key={id}>
        <CardHeader>
          <CardPoster
            src={poster}
            alt={tag}
          />
        </CardHeader>
        <CardBody>
        <Tag>{ tag  }</Tag>
        <CardTitle>{ title }</CardTitle>
          <CardText>
          { description }
          </CardText>
        </CardBody>
        <CardFooter>
          <UserBox>
          <Avatar src={ avatar} alt={userName} />
            <UserInfo>
            <UserName>{userName }</UserName>
            <Date>{dateFormatter(postedAt)}</Date>
            </UserInfo>
          </UserBox>
        </CardFooter>
      </Card>)
};

BlogCard.propTypes  = {
  poster: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  postedAt: PropTypes.string.isRequired,
}