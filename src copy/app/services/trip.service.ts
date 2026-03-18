import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private supabase: SupabaseService) {}

  async createTrip(driver_id: string) {

    const { data, error } = await this.supabase.supabase
      .from('trips')
      .insert([{ driver_id }])
      .select()
      .single();

    if (error) throw error;

    return data;
  }

  async savePoint(trip_id: string, lat: number, lng: number) {

    const { error } = await this.supabase.supabase
      .from('trip_points')
      .insert([{ trip_id, lat, lng }]);

    if (error) throw error;

  }

  async endTrip(trip_id: string) {

    const { error } = await this.supabase.supabase
      .from('trips')
      .update({ end_time: new Date() })
      .eq('id', trip_id);

    if (error) throw error;

  }

  // 🔥 REALTIME
  listenToTrip(trip_id: string, callback: (data: any) => void) {

    return this.supabase.supabase
      .channel('trip-realtime')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'trip_points',
          filter: `trip_id=eq.${trip_id}`
        },
        (payload) => {
          callback(payload.new);
        }
      )
      .subscribe();

  }

}