import React from 'react'
import { View, StyleSheet, Text, Button, TextInput } from 'react-native'
import { globalStyles } from '../styles/global'
import { Formik } from 'formik'
import * as yup from 'yup';
import FlatButton from '../shared/button'

const reviewSchema = yup.object({
    title: yup.string()
        .required()
        .min(4),
    body: yup.string()
        .required()
        .min(8),
    rating: yup.number()
        .required()
        .positive()
        .integer()
        .test("is-num-1-5", 'Rating must be an integer in 1~5', (val) => {
            return val < 6 && val > 0
        })

})

export default ReviewForm = ({ addReview }) => {

    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    addReview(values)
                    actions.resetForm()
                }}
            >
                {formikProps => (
                    <React.Fragment>
                        <TextInput name="title" style={globalStyles.input} placeholder='Review Title (Min 4 chars)'
                            onChangeText={formikProps.handleChange('title')}
                            value={formikProps.title} onBlur={formikProps.handleBlur('title')}
                        />
                        <Text style={globalStyles.errorText}>{formikProps.touched.title && formikProps.errors.title}</Text>

                        <TextInput name="body" multiline minHeight={60} style={globalStyles.input} placeholder='Review Body (Min 8 chars)'
                            onChangeText={formikProps.handleChange('body')}
                            value={formikProps.body} onBlur={formikProps.handleBlur('body')}
                        />
                        <Text style={globalStyles.errorText}>{formikProps.touched.body && formikProps.errors.body}</Text>

                        <TextInput name="rating" multiline style={globalStyles.input} placeholder='Rating (1~5)'
                            onChangeText={formikProps.handleChange('rating')}
                            value={formikProps.rating} keyboardType="numeric" onBlur={formikProps.handleBlur('rating')}
                        />
                        <Text style={globalStyles.errorText}>{formikProps.touched.rating && formikProps.errors.rating}</Text>

                        <FlatButton text='submit' onPress={formikProps.handleSubmit} />
                    </React.Fragment>
                )}
            </Formik>
        </View>
    )
}