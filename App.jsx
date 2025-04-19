import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from 'react-native';
// import { getFontFamily } from './assets/fonts/helper';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import globalStyle from './assets/styles/globalStyles';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import UserStory from './components/UserStory/userStory';
import UserPost from './components/UserPost/UserPost';

const App = () => {
  const userStories = [
    {
      firstName: 'Joesph',
      id: 1,
      profileImage: require('./assets/Images/avatar_default.png'),
    },
    {
      firstName: 'Oliva',
      id: 2,
      profileImage: require('./assets/Images/avatar_default.png'),
    },
    {
      firstName: 'Daniel',
      id: 3,
      profileImage: require('./assets/Images/avatar_default.png'),
    },
    {
      firstName: 'Amanda',
      id: 4,
      profileImage: require('./assets/Images/avatar_default.png'),
    },
    {
      firstName: 'Bella',
      id: 5,
      profileImage: require('./assets/Images/avatar_default.png'),
    },
    {
      firstName: 'Peace',
      id: 6,
      profileImage: require('./assets/Images/avatar_default.png'),
    },
    {
      firstName: 'Joesph',
      id: 7,
      profileImage: require('./assets/Images/avatar_default.png'),
    },
    {
      firstName: 'Adaeze',
      id: 8,
      profileImage: require('./assets/Images/avatar_default.png'),
    },
    {
      firstName: 'Femi',
      id: 9,
      profileImage: require('./assets/Images/avatar_default.png'),
    },
  ];
  const userPosts = [
    {
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'Sukabumi, Jawa Barat',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      profileImage: require('./assets/Images/avatar_default.png'),
      image: require('./assets/Images/userpost.png'),
      id: 1,
    },
    {
      firstName: 'Jennifer ',
      lastname: 'Wilkson',
      location: 'Pondok Leungsir, Jawa Barat',
      likes: 901,
      comments: 54,
      bookmarks: 25,
      profileImage: require('./assets/Images/avatar_default.png'),
      image: require('./assets/Images/userpost.png'),
      id: 2,
    },
    {
      firstName: 'Femi',
      lastname: 'Olaniye',
      location: 'Lagos, Nigeria',
      likes: 679,
      comments: 145,
      profileImage: require('./assets/Images/avatar_default.png'),
      image: require('./assets/Images/userpost.png'),
      bookmarks: 56,
      id: 3,
    },
    {
      firstName: 'Blessing',
      lastname: 'Job',
      location: 'Ondo, Nigeria',
      profileImage: require('./assets/Images/avatar_default.png'),
      image: require('./assets/Images/userpost.png'),
      likes: 453,
      comments: 89,
      bookmarks: 34,
      id: 4,
    },
    {
      firstName: 'James',
      lastname: 'Paul',
      location: 'Enugu, Nigeria',
      likes: 12401,
      comments: 890,
      profileImage: require('./assets/Images/avatar_default.png'),
      image: require('./assets/Images/userpost.png'),
      bookmarks: 605,
      id: 5,
    },
    {
      firstName: 'Onyinyechi ',
      lastname: 'Sampson',
      location: 'Umuahia, Nigeria',
      likes: 60,
      comments: 20,
      profileImage: require('./assets/Images/avatar_default.png'),
      image: require('./assets/Images/userpost.png'),
      bookmarks: 6,
      id: 6,
    },
  ];
  // userprofile
  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  // userposts
  const userPostsPageSize = 3;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);

    setIsLoadingUserPosts(true);
    const getInitialDataPosts = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRenderedData(getInitialDataPosts);
    setIsLoadingUserPosts(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SafeAreaView>
       {/* <View style={globalStyle.header}>
        <Title title={"Let's Explore"} />
        <TouchableOpacity style={globalStyle.envelopIcon}>
          <FontAwesomeIcon icon={faEnvelope} color={'#898DAE'} size={20} />
          <View style={globalStyle.messageNumberContainer}>
            <Text style={globalStyle.messageNumber}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={globalStyle.userStoryContainer}>
        <FlatList
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadingUserStories) {
              return;
            }
            setIsLoadingUserStories(true);
            const contentToAppend = pagination(
              userStories,
              userStoriesCurrentPage + 1,
              userStoriesPageSize,
            );
            if (contentToAppend.length > 0) {
              setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
              setUserStoriesRenderedData(prev => [...prev, ...contentToAppend]);
            }
            setIsLoadingUserStories(false);
          }}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={userStoriesRenderedData}
          renderItem={({item}) => (
            <UserStory
              key={'userStories' + item.id}
              firstName={item.firstName}
              profileImage={item.profileImage}
            />
          )}
        />
      </View>  */}
      <View style={globalStyle.userPostContainer}>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={globalStyle.header}>
                <Title title={"Let's Explore"} />
                <TouchableOpacity style={globalStyle.envelopIcon}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    color={'#898DAE'}
                    size={20}
                  />
                  <View style={globalStyle.messageNumberContainer}>
                    <Text style={globalStyle.messageNumber}>2</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={globalStyle.userStoryContainer}>
                <FlatList
                  onEndReachedThreshold={0.5}
                  onEndReached={() => {
                    if (isLoadingUserStories) {
                      return;
                    }
                    setIsLoadingUserStories(true);
                    const contentToAppend = pagination(
                      userStories,
                      userStoriesCurrentPage + 1,
                      userStoriesPageSize,
                    );
                    if (contentToAppend.length > 0) {
                      setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                      setUserStoriesRenderedData(prev => [
                        ...prev,
                        ...contentToAppend,
                      ]);
                    }
                    setIsLoadingUserStories(false);
                  }}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={userStoriesRenderedData}
                  renderItem={({item}) => (
                    <UserStory
                      key={'userStories' + item.id}
                      firstName={item.firstName}
                      profileImage={item.profileImage}
                    />
                  )}
                />
              </View>
            </>
          }
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadingUserPosts) {
              return;
            }
            setIsLoadingUserPosts(true);
            const contentToAppend = pagination(
              userPosts,
              userPostsCurrentPage + 1,
              userPostsPageSize,
            );
            if (contentToAppend.length > 0) {
              setUserPostsCurrentPage(setUserPostsCurrentPage + 1);
              setUserPostsRenderedData(prev => [...prev, ...contentToAppend]);
            }
            setIsLoadingUserPosts(false);
          }}
          data={userPostsRenderedData}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <UserPost
              key={item.id}
              firstName={item.firstName}
              lastname={item.lastName}
              image={item.image}
              comments={item.comments}
              bookmarks={item.bookmarks}
              profileImage={item.profileImage}
              location={item.location}
              likes={item.likes}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
