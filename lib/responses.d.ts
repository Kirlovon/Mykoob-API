export declare type GetAuthentificationDataResponse = Partial<{
    access_token: string | null;
    expires_in: string | number | null;
    token_type: string | null;
    scope: string | null;
    refresh_token: string | null;
    user_id: number | null;
}>;
export declare type ApisDetailedResponse = Partial<{
    user_data: {
        free: boolean;
        in: any[];
        out: any[];
        errors: any[];
    };
    user_profile_image: {
        free: boolean;
        in: any[];
        out: any[];
        errors: any[];
    };
    plus_services: {
        free: boolean;
        in: any[];
        out: any[];
        errors: any[];
    };
    user_lessonsplan: {
        free: boolean;
        in: any[];
        out: any[];
        errors: any[];
    };
    user_assignments: {
        free: boolean;
        in: any[];
        out: any[];
        errors: any[];
    };
    user_attendance: {
        free: boolean;
        in: any[];
        out: any[];
        errors: any[];
    };
    user_grades: {
        free: boolean;
        in: any[];
        out: any[];
        errors: any[];
    };
    register_device: {
        free: boolean;
        in: any[];
        out: any[];
        errors: any[];
    };
    unregister_device: {
        free: boolean;
        in: any[];
        out: any[];
        errors: any[];
    };
    notification_settings: {
        free: boolean;
        in: any[];
        out: any[];
        errors: any[];
    };
    user_activities: {
        free: boolean;
        in: any[];
        out: any[];
        errors: any[];
    };
    mark_user_activities_seen: {
        free: boolean;
        in: any[];
        out: any[];
        errors: any[];
    };
}>;
export declare type UserDataResponse = Partial<{
    user_data: {
        is_parent: boolean;
        is_studen: boolean;
        plus_ends: string | boolean | null;
        plus_active: boolean;
        trial_available: boolean;
        free_period_active: boolean;
        own_data: {
            age: string | number | null;
            sex: string | null;
            user_name: string | null;
            user_surname: string | null;
            phone_number: string | number | null;
            user_id: number | string | null;
            locale: string | null;
        };
        plus_service: string;
        plus_owner_name: string;
        plus_provider: string;
        plus_price_display: string;
        user: {
            user_info: {
                age: string | number | null;
                sex: string | null;
                user_name: string | null;
                user_surname: string | null;
                phone_number: number | string | null;
                user_id: number | string | null;
                profile_image_base64: string | null;
            };
            school: {
                region: string | null;
                country_code: string | null;
                school_id: number | null;
                name: string | null;
                school_user_id: number | null;
                school_gate_enabled: boolean | null;
                class: {
                    school_classes_id: number | null;
                    class_name: string | null;
                    school_classes_students_id: number | null;
                }[];
            }[];
        }[];
    };
    data_hash: string | null;
}>;
export declare type PlusServicesInfoResponse = Partial<{
    plus_services: {
        type: number | null;
        name: string | null;
        price: string | null;
        currency: string | null;
        payment_types: any[];
        bonuses: string[] | null;
        available_for: string[] | null;
        trial_available: boolean;
        period: string | null;
    }[];
    data_hash: string | null;
}>;
export declare type MarkAsSeenResponse = Partial<{
    status: string | null;
    status_text: string | null;
}>;
export declare type UnseenEventsResponse = Partial<{
    unseen_events_count: {
        activities: number | null;
        messages: number | null;
    };
}>;
export declare type LessonsPlanResponse = Partial<{
    lessonsplan: {
        dates: {
            date: string | number | null;
            lessons: {
                lesson_number: number | null;
                time_from: string | null;
                time_to: string | null;
                discipline: string | null;
                teacher: string | null;
                notes: string | null;
                theme: string | null;
                last_changes: string | null;
                classroom: string | null;
            }[];
        }[];
    };
    data_hash: string | null;
}>;
export declare type UserActivitiesResponse = Partial<{
    activities: {
        activity: {
            code: string | null;
            event_date: string | null;
            discipline_name: string | null;
            lesson_type: string | null;
            user_name: string | null;
            content_value: string | null;
            visited_yn: boolean;
            grade_value?: string | null;
            attendance_type?: string | null;
            activity_id: number | null;
            creation_date: string | null;
            actor_id: number | null;
            seen: boolean;
        }[] | any;
        date: string | null;
    }[];
    selected_child_yn: boolean;
    data_hash: string | null;
}>;
export declare type UserGradesResponse = Partial<{
    grades: {
        date: string | null;
        subject: {
            subject_name: string | null;
            cls_dsc_id: number | null;
            lesson_type: {
                type_name: string | null;
                lesson_type_id: number | null;
                grade: {
                    grade: string | number | null;
                    corrected_grade: string | null;
                    corrected_grade_color: string | null;
                    grade_color: string | null;
                    lesson_theme: string | null;
                    grade_notes: string | null;
                    grade_id: number | null;
                    grade_type: string | null;
                    refdate: string | null;
                    start_date: string | null;
                }[];
            }[];
        }[];
    }[];
    data_hash: string | null;
}>;
export declare type UserAttendanceResponse = Partial<{
    attendance: {
        date: string | null;
        lesson: {
            refdate: string | null;
            subject: string | null;
            attendance_type: number | null;
            start_date: string | null;
        }[];
    }[];
    data_hash: string | null;
}>;
export declare type UserAssignmentsResponse = Partial<{
    assignments: {
        date: string | null;
        discipline: {
            discipline_name: string | null;
            cls_dsc_id: number | null;
            teacher: string | null;
            assigment: {
                type: string | null;
                abbr: string | null;
                notes: string | null;
                grade_details_id: number | null;
                refdate: string | null;
                start_date: string | null;
            }[];
        }[];
    }[];
    data_hash: string | null;
}>;
