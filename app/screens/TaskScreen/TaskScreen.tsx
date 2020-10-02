import * as React from 'react';
import { View, SafeAreaView, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Title, Card, Divider, FAB } from 'react-native-paper';
import FileViewer from 'react-native-file-viewer';
import { StyleSheet } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
const TaskScreen: React.Fc = ({ route }) => {
  const [state, setState] = React.useState({
    Images: [
      'content://media/external/images/media/562298',
      'content://media/external/images/media/562299',
      'content://media/external/images/media/562300',
      'content://media/external/images/media/562301',
      'content://media/external/images/media/562302',
      'content://media/external/images/media/562303',
      'content://media/external/images/media/562304',
    ],
  });
  const onStateChange = ({ Images }) => setState({ Images });

  const { Images } = state;
  const uploadFiles = async () => {
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.images],
      });
      for (const res of results) {
        console.log(
          res.uri,
          res.type, // mime type
          res.name,
          res.size,
        );
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };
  const openFile = async (file) => {
    await FileViewer.open(file);
  };
  return (
    <SafeAreaView>
      <View
        style={{
          marginLeft: 8,
          marginRight: 8,
          height: '100%',
          width: '100%',
        }}>
        <Title style={{ fontWeight: 'bold' }}>{route.params.name}</Title>
        <ScrollView horizontal={true} ItemSeparatorComponent={Divider}>
          {Images.map((image, index) => (
            <Card
              key={index}
              onPress={() => openFile(image)}
              style={{
                margin: 8,
                height: 100,
                width: 100,
              }}>
              <Image
                source={{ uri: `${image}`, isStatus: true }}
                style={{ resizeMode: 'cover', width: '100%', height: '100%' }}
              />
            </Card>
          ))}
        </ScrollView>

        <View>
          <FAB
            style={styles.fab}
            // label="Upload"
            icon="upload"
            onPress={uploadFiles}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default TaskScreen;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
