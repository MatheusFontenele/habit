import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import dayjs from 'dayjs';

const Heatmap = () => {
    const [data, setData] = useState({});
    const startDate = dayjs().startOf('year');
    const endDate = dayjs().endOf('year');

    useEffect(() => {
        // Simulação de dados para demonstração
        const newData: { [key: string]: number } = {}; // Add index signature to allow indexing with a string
        let currentDate = startDate;
        while (currentDate.isBefore(endDate)) {
            // Gere um número aleatório de contribuições para cada dia (apenas para demonstração)
            const contributions = Math.floor(Math.random() * 10);
            newData[currentDate.format('YYYY-MM-DD')] = contributions;
            currentDate = currentDate.add(1, 'day');
        }
        setData(newData);
    }, []);

    return (
        <View style={styles.heatmap}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ marginTop: 10}}
            >
                <View style={styles.heatmapGrid}>
                    {Object.keys(data).map((date, index) => (
                        <View
                            key={date}
                            style={[
                                styles.heatmapSquare,
                                { backgroundColor: `rgba(127, 0, 255, ${data[date as keyof typeof data] / 10})` },
                            ]}
                        />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
  heatmap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heatmapGrid: {
    height: 90,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  heatmapSquare: {
    width: 10,
    height: 10,
    margin: 1,
    borderRadius: 2,
  },
});

export default Heatmap;
