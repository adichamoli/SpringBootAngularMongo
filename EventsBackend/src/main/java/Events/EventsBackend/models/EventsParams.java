package Events.EventsBackend.models;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "eventsapp")
public class EventsParams {
	@Id
	private String eventId;
	private String eventName;
	private String eventType;
	private String eventDate;
	private String eventFrequency;
	private Long eventAmount;
	private String eventDescription;
	
	public String getEventId() {
		return eventId;
	}
	
	public void setEventId(String eventId) {
		this.eventId = eventId;
	}

	public String getEventName() {
		return eventName;
	}
	
	public void setEventName(String eventName) {
		this.eventName = eventName;
	}
	
	public String getEventType() {
		return eventType;
	}
	
	public void setEventType(String eventType) {
		this.eventType = eventType;
	}
	
	public String getEventDate() {
		return eventDate;
	}
	
	public void setEventDate(String eventDate) {
		this.eventDate = eventDate;
	}
	
	public String getEventFrequency() {
		return eventFrequency;
	}
	
	public void setEventFrequency(String eventFrequency) {
		this.eventFrequency = eventFrequency;
	}
	
	public Long getEventAmount() {
		return eventAmount;
	}
	
	public void setEventAmount(Long eventAmount) {
		this.eventAmount = eventAmount;
	}
	
	public String getEventDescription() {
		return eventDescription;
	}
	
	public void setEventDescription(String eventDescription) {
		this.eventDescription = eventDescription;
	}
}
