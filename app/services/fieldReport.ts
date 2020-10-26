import { apiClient } from 'app/services/client';
import ApiConfig from 'app/config/api-config';
import { Platform } from 'react-native';
export default function fieldreport(data) {
  //   const data = apiClient.post(ApiConfig.LOGIN, { username, password });
  //   return data;
  // return { success: true, data: { id: 1 }, message: 'Success' };
  var formData = new FormData();
  data.fieldReport.images.forEach((img) =>
    formData.append('images', {
      name: img,
      type: 'image/jpeg',
      uri: Platform.OS === 'android' ? img : img.replace('file://', ''),
    }),
  );
  formData.append('body', JSON.stringify(data));
  var axiosRequest = apiClient.post(ApiConfig.MYFIELDREPORT, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      mimeType: 'multipart/form-data',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
      'Access-Control-Allow-Headers': '*',
      Accept: '*',
    },
  });
  return axiosRequest;
}
