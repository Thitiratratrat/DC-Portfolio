import React from 'react';
import RNFetchBlob from 'react-native-fetch-blob';
import {Chip} from 'react-native-paper';
import styled from '@emotion/native';

const FileContainer = styled.View`
  flex: 1;
  flex-direction: row;
  margin-vertical: 20px;
  flex-wrap: wrap;
`;

const File = styled(Chip)`
  margin: 10px;
`;

export default function Files({files}) {
  async function downloadFile(fileName) {
    const {dirs} = RNFetchBlob.fs;
    const BASE_URL = 'http://34.117.208.133/api/student/download/file';
    const exportLink = `${BASE_URL}?fileName=${fileName}`;

    RNFetchBlob.config({
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        mediaScannable: true,
        title: fileName,
        path: `${dirs.DownloadDir}/${fileName}`,
      },
    })
      .fetch('GET', exportLink)
      .then(res => {
        console.log('The file saved to ', res.path());
      })
      .catch(e => {
        console.log(e);
      });
  }

  return (
    <FileContainer>
      {files.map((file, index) => (
        <File key={index} onPress={() => downloadFile(file.fileName)}>
          {file.fileName}
        </File>
      ))}
    </FileContainer>
  );
}
