import Api from '@/services/Api'

export default {
    index (search){
        return Api().get('airplanes')
    },
    show (airplaneId){
        return Api().get('airplane/'+airplaneId)
    },
    post (airplane){
        return Api().post('airplane',airplane)
    },
    put (airplane){
        return Api().put('airplane/'+airplane.id, airplane)
    },
    delete (airplane){
        return Api().delete('airplane/'+airplane.id, airplane)
    }
}