export const categories = [
  {
    name: 'computer organization and architecture',
    image: 'https://lastmomenttuitions.com/wp-content/uploads/2021/02/computer-organization-and-architecture-.jpg',
  },
  {
    name: 'assembly and machine language',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQdA_2Vi350-blMARDU4bOdXkXaanfyYmPVg&usqp=CAU',
  },
  {
    name: 'maths 1',
    image: 'https://lastmomenttuitions.com/wp-content/uploads/2021/03/Engineering-Maths-1-SPPU.jpg',
  },
  {
    name: 'object oriented programming',
    image: 'https://www.roberthalf.com/sites/default/files/2018-03/Object%20oriented%20programming.jpg',
  },
  {
    name: 'data structures and algorithms',
    image: 'https://synergisticit.com/wp-content/uploads/2020/09/How-Data-Structures-and-Algorithms-are-important-for-Computer-Science-Graduates.jpg',
  },
  {
    name: 'database managment system',
    image: 'https://miro.medium.com/max/1400/1*iDcgUCw_MtRSuKLBGEaJ4Q.jpeg',
  },
  {
    name: 'others',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEVNYFX///9tfHM9U0Y2TkFEWU1JXVFFWk7e4d/8/fw7UUTf4eCEj4mao53s7u20u7eiqaVXaV90gnp8iIGss6+HkozBxsPk5+UwSjtkc2rFysfy8/PP09C5v7xrenHM0M2Vn5lbbGJ8ic69AAAEGUlEQVR4nO2Y23aqMBRF2YYApq0oKlYBL///kydYhAS1pR1y7OpY86UtISQzu7ntIPjbRJNn92BsaIgPDfGhIT40xIeG+NAQHxriQ0N8aIgPDfGhIT40xIeG+NAQHxriQ0N8aIgPDfGhIT40xIeG+NAQHxriQ0N8aIgPDfGhIT40xIeG+NAQHxriQ0N8aIgPDfGhIT40xIeG+NAQHxriQ0N8aIgPDfGhIT40xIeG+NAQHxriQ0N8aOi/rE0YhkZF3tP6mUNXqELtvhV7tZRTRXkl7WOjdHBFrMydknud/oah2eczEZntMuM+nYrH5KKoNjJvO2IKWbuKtrCjdBVV+7hI5lHPJDLrshCZJnPtD9gjDKO4FNnkaZWIJIsuUnqV1pQyO/+sTm1XE9dwJq+eYSJleuHolUwl//hSacdu7SnGJzvEZZUepjJ99SP/AMO4kM021FqbRSlTV7HGHCV5P//WdfXlc8N5qBu8cFjDvTo/VuGbyNKZEtFWJNeqKTkO+08dbKhz2Vzm2PtBkt4Ixm9Xj740vN1Da5hdrEwqG+er9iNV2Ly1FFkM6vhgQzvd2i5GJ5HeNBjHsA5a91aUOX+FiawGBXGwYShdw0F0NYDjGNbLTteQbWPTrnE6lcOgmTjc0G04+F+GC5GuRM+dNuK3TfrgGD7DUM1l1u1M8VGKsPtr4J74mw0jNRGvlo3ofug22PJMQxVd8KpNZRsaS3iqxL7kFlVSbE3sH6m+YmTDViK8NqyWrw2Z22drWNTM7H4/W/rfNLnd8I+BUd+I5LiGabZsyIorww6vpjVMSovIamv64VL7Q32c2631wBPN2IYefcN0P2nYetXsmcYo9f4iuQmuiJTJVvXo7BYD4zhyDCdZw/6zeehX+2gosqvM6eaMi7RSayuZDVN84jz8Yi01pZQ3gtg0F85Fhq04v3e3qE9s+/sS75t7H+jxew0DZc/3d4P4J05t0cI9Cp8bcY4xf8EwULm8hE5JvE7yts4Ihs+4W/hbzMh3i/79sLcGjGKoUpk5Qazvh20bj78f6t0T7vixePmrce/4Tp4m8PM0H6U/MDT38jStoV5J4Syn0X7MPM0l17Y659qC/kZ1y/CrXNvqgp9rcye81Z27M3Fb59rSdFdn4R6ea6vzpdWNfGnT9puXMzr3bnC+1BubuMq7c2q8zr3ZNmq+NDifCG/kvJu+hFdj+sOct3aVYt37Xxw1540JDfGhIT40xIeG+NAQHxriQ0N8aIgPDfGhIT40xIeG+NAQHxriQ0N8aIgPDfGhIT40xIeG+NAQHxriQ0N8aIgPDfGhIT40xIeG+NAQHxriQ0N8aIgPDfGhIT40xIeG+NAQHxriQ0N8aIgPDfGhIT40xIeG+NAQHxriQ0N8aIgPDfGJJv8Azfw7H4BzKEgAAAAASUVORK5CYII=',
  },
];

export const postDetailQuery = (postId) => {
  const query = `*[_type == "post" && _id == '${postId}']{
    image{
      asset->{
        url
      }
    },
    _id,
    title, 
    about,
    category,
    postedBy->{
      _id,
      userName,
      image
    },
   save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
    comments[]{
      comment,
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    }
  }`;
  return query;
};

export const postDetailMorePostQuery = (post) => {
  const query = `*[_type == "post" && category == '${post.category}' && _id != '${post._id}' ]{
    image{
      asset->{
        url
      }
    },
    _id,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};


export const userIdQuery = (userId) => {
  const query = `*[_type=="user" && _id=='${userId}']`

  return query
}

export const searchQuery = (searchTerm) => {
  const query = `*[_type == "post" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
          image{
            asset->{
              url
            }
          },
              _id,
              destination,
              postedBy->{
                _id,
                userName,
                image
              },
              save[]{
                _key,
                postedBy->{
                  _id,
                  userName,
                  image
                },
              },
            }`;
  return query;
};

export const feedQuery = `*[_type == "post"] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
        _id,
        destination,
        postedBy->{
          _id,
          userName,
          image
        },
        save[]{
          _key,
          postedBy->{
            _id,
            userName,
            image
          },
        },
      } `;

export const userCreatedpostsQuery = (userId) => {
  const query = `*[ _type == 'post' && userId == '${userId}'] | order(_createdAt desc){
          image{
            asset->{
              url
            }
          },
          _id,
          destination,
          postedBy->{
            _id,
            userName,
            image
          },
          save[]{
            postedBy->{
              _id,
              userName,
              image
            },
          },
        }`;
  return query;
};

export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
};

export const userSavedpostsQuery = (userId) => {
  const query = `*[_type == 'post' && '${userId}' in save[].userId ] | order(_createdAt desc) {
          image{
            asset->{
              url
            }
          },
          _id,
          destination,
          postedBy->{
            _id,
            userName,
            image
          },
          save[]{
            postedBy->{
              _id,
              userName,
              image
            },
          },
        }`;
  return query;
};