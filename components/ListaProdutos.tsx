
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import {produtos} from '../data/produtos'


const ListaProduto = () => {
    return (
        <View>
            <FlatList
                // Indica de onde vêm os dados
                data={produtos}

                // Identifica cada produto
                keyExtractor={(prod) => prod.id}

                // Monta como cada produto será exibido
                renderItem={({ item }) => (
                    <View style={styles.linha}>
                        <Image
                            source={item.imagem}
                            style={{ width: 100, height: 100 }}
                            resizeMode="contain"
                        />

                        <Text style={styles.titulo}>
                            {item.titulo}
                        </Text>

                        <Text>
                            R$ {item.preco.toFixed(2).replace('.', ',')}
                        </Text>

                        <TouchableOpacity>
                            <Text style={styles.botao}>Comprar</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}

export default ListaProduto

const styles = StyleSheet.create({
    linha: {
        padding: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    titulo: {
        fontWeight: 'bold'
    },
    botao: {
        color: "#fff",
        padding: 10,
        textAlign: "center",
        borderRadius: 5,
        marginTop: 10,
    }
})