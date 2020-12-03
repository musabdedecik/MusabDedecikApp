import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Dimensions,
  Modal,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface ICard {
  title: string;
  desc: string;
  uri: HTMLImageElement;
}
type CardsProps = {
  title?: string;
  begenilenler?: number[];
};
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Cards = ({title, begenilenler}: CardsProps) => {
  const [modal, setModal] = useState<boolean>(false);
  const [liked, setLiked] = useState<number>(0);
  const [dissliked, setDissliked] = useState<number>(0);
  const [success, setSuccess] = useState<boolean>(false);
  const [quits, setQuits] = useState<boolean>(false);
  const [cards, setCards] = useState<ICard[]>([
    {
      title:
        'Daha önce deneyimlemediğim ve bu uygulama içerisinde kullanmaya çalıştığım teknolojiler',
      desc:
        'Typescript, Jest ve Detox bu teknolojileri daha önce araştırmıştım fakat bulunduğum şirket ve projelerde deneyimleme fırsatım olmadı. Bu uygulama için kısa sürede elimden geldiğince öğrenmeye ve kullanmaya çalıştım.',
      uri: require('../assets/bilmediklerim.png'),
    },
    {
      title: 'React JS',
      desc:
        'React ile tanışmam 2 yıl önce gerçekleşti. İçinde bulunacağım projeler için kendime bir yol çizmem gerekiyordu ve bana bu yolda React yoğun bir şekilde eşlik etmeye devam ediyor.',
      uri: require('../assets/react.jpg'),
    },
    {
      title: 'React Native',
      desc:
        'Kendisiyle tanışmam react js ten sonra gerçekleşti. Mobil uygulamalarda her zaman hissiyat takıntım olmuştur. Girdiğim her uygulamada hangi teknolojilerin kullanıldığını öğrenmeye çalıştım ve daha öncesinde React js deneyimlediğim için React Native`i tercih ediyorum.',
      uri: require('../assets/react-native.png'),
    },
    {
      title: 'Redux',
      desc:
        'Daha önce bulunduğum projelerde yoğun olarak Redux`ı kullanmayı tercih ettim. Redux`ın mantığını ve kullanımı 2 yıldır deneyimliyorum.',
      uri: require('../assets/reduxlogo.png'),
    },
    {
      title: 'Node.js',
      desc:
        'Freelancer olarak bulunduğum bir projede deneyimleme fırsatım oldu. Son 6 aydır aktif olarak kullanıyorum. Ara katman olarak Express framework ünü kullanıyorum.',
      uri: require('../assets/nodejs.png'),
    },
    {
      title: 'Next.js',
      desc:
        'Static export ve CSR(client side rendering) özellikleri çok ilgimi çekiyor. Freelance olarak Next js ile bir web sitesi geliştirdim.',
      uri: require('../assets/next.png'),
    },
    {
      title: 'Microsoft SQL Server',
      desc:
        'Bulunduğum şirket veritabanı için sql server kullanıyor, aktif olarak 2 yıldır deneyimliyorum.',
      uri: require('../assets/sql.jpg'),
    },
    {
      title: 'MongoDb',
      desc:
        'Son 6 aydır deneyimliyorum. Collection, field yapısını ve node js ile uyumumluğundan ve senkronize olmasından dolayı tercih ediyorum.',
      uri: require('../assets/mongo.png'),
    },
    {
      title: 'Java',
      desc:
        'Kendisiyle ortalama 6 aylık bir süreç geçirdim. Freelancer olarak bir mobil uygulama geliştirirken kullandım.',
      uri: require('../assets/javalogo.png'),
    },
    {
      title: 'Adobe xDesign',
      desc:
        'Son zamanlarda aktif şekilde web tasarımlarımı çıkarırken kullandığım bir teknoloji. Prototype`leme özellikleri ile büyük dertten kurtardığını düşünüyor ve deneyimliyorum.',
      uri: require('../assets/adobe.png'),
    },
    {
      title: 'Kullandığım Araçlar',
      desc:
        'İde olarak VsCode tercih ediyorum. Eslint, Prettier uzun zamandır kullanıyorum. Kontrol Sürüm yönetimi için Git tercih ediyorum.',
      uri: require('../assets/vscode.png'),
    },
    {
      title: 'Daha önce Geliştirmiş olduğum projeler',
      desc: 'Mail olarak ileteceğim.',
      uri: require('../assets/atolye15logo.jpg'),
    },
  ]);

  useEffect(() => {
    if (liked > dissliked) {
      setSuccess(true);
    } else if (liked > 0 && liked == dissliked) {
      setQuits(true);
    } else {
      setSuccess(false);
    }
  }, [modal]);

  return (
    <>
      <StatusBar
        backgroundColor={
          modal
            ? success
              ? `#4BB543`
              : quits
              ? `#FFA500`
              : !success
              ? `#FF0000`
              : 'f05454'
            : '#222831'
        }
        barStyle="light-content"
      />
      <View style={styles.container}>
        <Text style={styles.title}>
          Kartları sağa ve sola kaydırarak kullandığım araçları ve teknolojileri
          öğrenip beni <Text style={{color: '#f05454'}}>puanlayabilirsin!</Text>
        </Text>
        <Text
          style={{
            width: '100%',
            textAlign: 'center',
            marginTop: 50,
            color: 'white',
          }}>
          Tüm kartlar bitti!
        </Text>
        <Text
          style={{
            width: '100%',
            textAlign: 'center',
            marginTop: 20,
            color: 'white',
          }}>
          Değerlendirme için çok teşekkürler!
        </Text>
        {modal ? (
          <Modal
            animationType="slide"
            transparent={false}
            visible={true}
            style={{position: 'relative'}}
            presentationStyle={'formSheet'}
            onRequestClose={() => {
              console.log('kapat');
            }}>
            {success ? (
              <View style={[styles.score, styles.sccs]}>
                <Image
                  style={styles.stateImg}
                  source={require('../assets/basarili.png')}></Image>
                <Text style={styles.medium}>BAŞARILI</Text>
                <View style={styles.stateContainer}>
                  <Text style={styles.medium}>
                    <Icon
                      style={[styles.stateIcon, styles.large]}
                      name="emoticon-happy"></Icon>
                    {liked}
                  </Text>
                  <Text style={styles.medium}>
                    {' '}
                    <Icon
                      style={[styles.stateIcon, styles.large]}
                      name="emoticon-sad"></Icon>{' '}
                    {dissliked}
                  </Text>
                </View>
              </View>
            ) : quits ? (
              <View style={[styles.score, styles.qts]}>
                <Image
                  style={styles.stateImg}
                  source={require('../assets/quits.png')}></Image>

                <Text style={styles.medium}>BERABERLİK</Text>
                <View style={styles.stateContainer}>
                  <Text style={styles.medium}>
                    <Icon
                      style={[styles.stateIcon, styles.large]}
                      name="emoticon-happy"></Icon>{' '}
                    {liked}
                  </Text>
                  <Text style={styles.medium}>
                    {' '}
                    <Icon
                      style={[styles.stateIcon, styles.large]}
                      name="emoticon-sad"></Icon>{' '}
                    {dissliked}
                  </Text>
                </View>
              </View>
            ) : (
              <View style={[styles.score, styles.unsccs]}>
                <Image
                  style={styles.stateImg}
                  source={require('../assets/basarisiz.png')}></Image>
                <Text style={styles.medium}>BAŞARISIZ</Text>
                <View style={styles.stateContainer}>
                  <Text style={styles.medium}>
                    <Icon
                      style={[styles.stateIcon, styles.large]}
                      name="emoticon-happy"></Icon>{' '}
                    {liked}
                  </Text>
                  <Text style={styles.medium}>
                    {' '}
                    <Icon
                      style={[styles.stateIcon, styles.large]}
                      name="emoticon-sad"></Icon>{' '}
                    {dissliked}
                  </Text>
                </View>
              </View>
            )}
            <TouchableOpacity
              onPress={() => {
                setModal(false);
              }}
              style={{
                width: '100%',
                position: 'absolute',
                bottom: 0,
                left: 0,
                justifyContent: 'center',
                alignItems: 'center',
                height: 90,
                backgroundColor: 'white',
                zIndex: 9,
              }}>
              <Text>Kartlara Dön</Text>
            </TouchableOpacity>
          </Modal>
        ) : null}
        <Swiper
          overlayLabels={{
            left: {
              element: (
                <View style={styles.state}>
                  <Icon style={styles.stateIcon} name="emoticon-sad"></Icon>
                  <Text style={styles.stateText}>Başarısız</Text>
                </View>
              ),
              title: 'BASARISIZ',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: -20,
                  marginLeft: 20,
                },
              },
            },
            right: {
              element: (
                <View style={[styles.state, styles.sccs]}>
                  <Icon style={styles.stateIcon} name="emoticon-happy"></Icon>
                  <Text style={styles.stateText}>Başarılı</Text>
                </View>
              ),
              title: 'BASARILI',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: -20,
                  marginLeft: -40,
                },
              },
            },
          }}
          cards={cards}
          verticalSwipe={false}
          renderCard={(card) => {
            return (
              <View style={styles.card}>
                <Image
                  style={{
                    width: '80%',
                    maxHeight: 250,
                    resizeMode: 'contain',
                  }}
                  source={card.uri}></Image>
                <Text style={styles.text}>{card.title}</Text>
                <Text style={[styles.title, styles.desc]}>{card.desc}</Text>
              </View>
            );
          }}
          onSwipedLeft={() => {
            setDissliked(dissliked + 1);
          }}
          onSwipedRight={() => {
            setLiked(liked + 1);
          }}
          onSwipedAll={() => {
            setModal(true);
          }}
          cardIndex={0}
          stackScale={5}
          backgroundColor={'transparent'}
          stackSize={cards.length < 6 ? cards.length : 3}></Swiper>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    marginTop: 25,
    paddingVertical: 0,
    backgroundColor: '#30475e',
    borderRadius: 10,
    height: 550,
    width: '100%',
  },
  stateContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  stateImg: {
    width: '70%',
    height: 450,
    resizeMode: 'contain',
  },
  medium: {
    fontSize: 30,
    color: 'white',
    marginVertical: 10,
  },
  score: {
    width: width,
    height: height,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  qts: {
    backgroundColor: '#FFA500',
  },
  large: {
    fontSize: 60,
  },
  small: {
    fontSize: 12,
    fontWeight: '400',
  },
  desc: {
    fontWeight: 'normal',
    fontSize: 17,
    color: '#888',
  },
  title: {
    fontWeight: 'bold',
    color: '#ccc',
    paddingVertical: 10,
    fontSize: 14,
    marginHorizontal: 12,
    textAlign: 'left',
  },
  stateIcon: {
    fontSize: 25,
    color: 'white',
  },
  state: {
    backgroundColor: '#f05454',
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  sccs: {
    backgroundColor: '#4BB543',
  },
  unsccs: {
    backgroundColor: '#FF0000',
  },
  stateText: {
    color: 'white',
  },
  card: {
    height: 450,
    marginRight: 25,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#e1e1e1',
    justifyContent: 'center',
    paddingTop: 0,
    marginTop: 0,
    alignItems: 'center',
    paddingVertical: 0,
    backgroundColor: 'white',
  },

  text: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 12,
    width: '80%',
    backgroundColor: 'transparent',
  },
});
export default Cards;
